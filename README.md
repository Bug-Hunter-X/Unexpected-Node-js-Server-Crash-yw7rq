# Unexpected Node.js Server Crash

This repository demonstrates a bug where a Node.js HTTP server crashes unexpectedly after handling a certain number of requests. The crash occurs without any error messages in the console, making debugging difficult.

## Bug Description

A simple HTTP server is implemented using the `http` module. Under heavy load, the server crashes without any clear indication of the cause. This makes it challenging to identify and fix the root problem.

## Reproduction Steps

1. Clone the repository.
2. Run `node server.js`.
3. Send a large number of requests to the server (e.g., using a load testing tool).
4. Observe that the server eventually crashes without any error messages.

## Solution

The provided solution demonstrates a fix for this issue.