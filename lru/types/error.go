package types

type ErrorInvalidOptions struct {
	Message string
}

func (e *ErrorInvalidOptions) Error() string {
	return e.Message
}

var _ error = (*ErrorInvalidOptions)(nil)
