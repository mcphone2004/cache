//go:build tools

// Package tools pins tool dependencies so Dependabot can track and upgrade them.
// The build tag prevents this file from being compiled into the main module.
package tools

import _ "golang.org/x/vuln/cmd/govulncheck"
