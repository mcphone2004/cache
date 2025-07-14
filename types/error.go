// Package lrutypes defines types used in the LRU cache implementation.
package lrutypes

// ErrorInvalidOptions represents an error for invalid options in the LRU cache.
type ErrorInvalidOptions struct {
	Message string
}

// Error implements the error interface for ErrorInvalidOptions.
func (e *ErrorInvalidOptions) Error() string {
	return e.Message
}

// Ensure ErrorInvalidOptions implements the error interface.
var _ error = (*ErrorInvalidOptions)(nil)
