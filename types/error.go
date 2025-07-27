// Package cachetypes defines types used in the LRU cache implementation.
package cachetypes

// ErrorInvalidOptions represents an error for invalid options in the LRU cache.
type ErrorInvalidOptions struct {
	Message string
}

// Error implements the error interface for ErrorInvalidOptions.
func (e *ErrorInvalidOptions) Error() string {
	return e.Message
}

// ErrorShutdown represents that cache already shutdown
type ErrorShutdown struct {
	Message string
}

func (e *ErrorShutdown) Error() string {
	if e.Message == "" {
		return "The cache has been shutdown"
	}
	return e.Message
}

// Ensure ErrorInvalidOptions implements the error interface.
var _ error = (*ErrorInvalidOptions)(nil)
