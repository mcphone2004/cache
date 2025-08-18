// Package cachetypes defines types used in the LRU cache implementation.
package cachetypes

// InvalidOptionsError represents an error for invalid options in the LRU cache.
type InvalidOptionsError struct {
	Message string
}

// Error implements the error interface for ErrorInvalidOptions.
func (e *InvalidOptionsError) Error() string {
	return e.Message
}

// ShutdownError represents that cache already shutdown
type ShutdownError struct {
	Message string
}

func (e *ShutdownError) Error() string {
	if e.Message == "" {
		return "The cache has been shutdown"
	}
	return e.Message
}

// Ensure ErrorInvalidOptions implements the error interface.
var _ error = (*InvalidOptionsError)(nil)
