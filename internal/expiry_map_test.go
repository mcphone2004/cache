package internal

import (
	"testing"
	"time"

	"github.com/stretchr/testify/require"
)

func TestTimeHeap(t *testing.T) {
	bucketDuration := 30 * time.Second
	m := newIntern[int](nil, bucketDuration)
	defer m.Shutdown()

	t1 := time.Date(2025, 8, 3, 0, 0, 0, 0, time.UTC)
	t1 = t1.Truncate(bucketDuration)
	_ = m.Register(1, t1)
	require.Equal(t, 1, len(m.expiryTimes))
	require.Equal(t, 1, m.timeHeap.Len())
	t2 := t1.Add(5 * time.Second)
	_ = m.Register(2, t2)
	require.Equal(t, 2, len(m.expiryTimes))
	require.Equal(t, 2, m.timeHeap.Len())
	t3 := t1.Add(25 * time.Second)
	_ = m.Register(3, t3)
	require.Equal(t, 2, len(m.expiryTimes))
	require.Equal(t, 2, m.timeHeap.Len())
	t4 := t1.Add(35 * time.Second)
	_ = m.Register(4, t4)
	require.Equal(t, 3, len(m.expiryTimes))
	require.Equal(t, 3, m.timeHeap.Len())
	t5 := t1.Add(45 * time.Second)
	_ = m.Register(5, t5)
	require.Equal(t, 3, len(m.expiryTimes))
	require.Equal(t, 3, m.timeHeap.Len())

	p1, found := m.timeHeap.Peep()
	require.True(t, found)
	r1 := m.getExpiryRecords()
	require.Equal(t, 2, len(m.expiryTimes))
	require.Equal(t, 2, m.timeHeap.Len())
	require.NotNil(t, r1)
	_, ok := r1[1]
	require.True(t, ok, "%+v", r1)
	require.Equal(t, 1, len(r1))
	p2, found := m.timeHeap.Peep()
	require.True(t, found)
	require.True(t, p1.Before(p2))
	r2 := m.getExpiryRecords()
	require.Equal(t, 1, len(m.expiryTimes))
	require.Equal(t, 1, m.timeHeap.Len())
	require.NotNil(t, r2)
	_, ok = r2[2]
	require.True(t, ok)
	_, ok = r2[3]
	require.True(t, ok)
	require.Equal(t, 2, len(r2))
	p3, found := m.timeHeap.Peep()
	require.True(t, found)
	require.True(t, p2.Before(p3))
	r3 := m.getExpiryRecords()
	require.Equal(t, 0, len(m.expiryTimes))
	require.Equal(t, 0, m.timeHeap.Len())
	require.NotNil(t, r3)
	_, ok = r3[4]
	require.True(t, ok)
	_, ok = r3[5]
	require.True(t, ok)
	require.Equal(t, 2, len(r3))
	r4 := m.getExpiryRecords()
	require.Nil(t, r4)

	h1 := m.Register(1, t1)
	h2 := m.Register(2, t2)
	h3 := m.Register(3, t3)
	h4 := m.Register(4, t4)
	h5 := m.Register(5, t5)

	m.Unregister(h1, 1)
	m.Unregister(h2, 2)
	m.Unregister(h3, 3)
	m.Unregister(h4, 4)
	m.Unregister(h5, 5)

	r5 := m.getExpiryRecords()
	require.Nil(t, r5)
}
