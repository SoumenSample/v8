# Socket Production Configuration

## Security Features Implemented

### ✅ Authentication
- JWT-based socket connection validation
- User ID passed via socket auth handshake
- Token verification middleware (ready for next-auth integration)

### ✅ Input Validation
- Message text length validation (max 5000 chars)
- XSS prevention with text sanitization
- Receiver ID validation with MongoDB ObjectId check
- Ticket ID validation
- Prevents self-messaging

### ✅ Rate Limiting
- Per-user message rate limiting (default: 10 messages/min)
- Per-user ticket message rate limiting (default: 20 messages/min)
- Separate rate limit buckets for different event types
- Returns reset time on rate limit violation

### ✅ Message Acknowledgment
- Socket events now support callbacks
- Server responds with `{ ok: true, messageId }` on success
- Client can handle failures and retry

### ✅ Error Logging
- Structured logging with categories (AUTH, MESSAGE, CONNECTION, VALIDATION, etc.)
- Error tracking with stack traces in development
- Errors logged to JSON format in production
- Integration ready with external logging services

### ✅ Reconnection Logic
- Auto-reconnect with exponential backoff
- Max 5 reconnection attempts
- Reconnection delay: 1-5 seconds
- Automatic rejoin on successful reconnect

### ✅ Connection Stability
- Dual transport fallback (WebSocket + polling)
- Graceful shutdown handlers (SIGINT/SIGTERM)
- Proper socket cleanup on disconnect
- Error event handlers

---

## Environment Variables

### Socket Server (.env)

```
# Node Environment
NODE_ENV=production

# Socket Server
PORT=5000
HOST=0.0.0.0

# CORS Configuration
SOCKET_CORS_ORIGIN=https://yourdomain.com,https://www.yourdomain.com

# Security - Optional but recommended
SOCKET_EMIT_SECRET=your-secure-random-secret-here
NEXTAUTH_SECRET=your-nextauth-secret

# Logging (optional)
# ERROR_LOG_SERVICE=https://your-logging-service.com/api/logs
```

### Frontend (.env.local or .env.production)

```
# Socket Server URL (production)
NEXT_PUBLIC_SOCKET_URL=https://socket.yourdomain.com

# Or use the same domain if socket is on same server
# NEXT_PUBLIC_SOCKET_URL=https://yourdomain.com
```

---

## Deployment Checklist

### Before Going to Production

- [ ] Set `NODE_ENV=production` on socket server
- [ ] Set `SOCKET_CORS_ORIGIN` to your production domain
- [ ] Generate and set `SOCKET_EMIT_SECRET` if using external API calls
- [ ] Configure `NEXTAUTH_SECRET` for token validation
- [ ] Test WebSocket connection with browser DevTools
- [ ] Monitor error logs for the first 24 hours
- [ ] Load test with expected concurrent users
- [ ] Set up monitoring/alerting for socket server

### Running Standalone Socket Server

```bash
# Development
npm run socket

# Production (Render.com example)
node socket-server.js
```

### Integration with Next.js Server

Socket is automatically initialized in `server.js`:

```bash
npm run start
```

---

## Rate Limiting Configuration

Modify in `lib/socket/rate-limiter.js`:

```javascript
const rateLimiter = createRateLimitMiddleware({
  messageLimit: 10,        // Max messages per minute
  messageWindow: 60000,    // 1 minute window
  ticketLimit: 20,         // Max ticket messages per minute
  ticketWindow: 60000,     // 1 minute window
  cleanupInterval: 300000, // Cleanup every 5 minutes
});
```

---

## Monitoring & Debugging

### Connection Issues

1. Check browser DevTools → Network → WS tab
2. Verify `SOCKET_CORS_ORIGIN` matches frontend domain
3. Check firewall/proxy settings for WebSocket support
4. Monitor server logs for connection errors

### Message Delivery Issues

1. Check rate limiter hasn't been triggered
2. Verify message validation passed
3. Check receiver user ID is valid
4. Monitor server logs for emit failures

### View Server Logs

```bash
# Development (colored output)
NODE_ENV=development npm run socket

# Production (JSON output)
NODE_ENV=production npm run socket | tee socket.log
```

---

## Redis Integration (Optional - For Production Scaling)

For distributed systems with multiple socket servers, use Redis for session management:

1. Install redis: `npm install redis`
2. Configure redis adapter in socket initialization
3. Update rate limiter to use Redis instead of in-memory

---

## Security Best Practices

1. **Always use HTTPS/WSS** in production - set protocol enforcement
2. **Rotate SOCKET_EMIT_SECRET** regularly
3. **Monitor for abuse patterns** - sudden spike in failed messages
4. **Enable rate limiting** - prevent spam and DOS attacks
5. **Keep dependencies updated** - run `npm audit` regularly
6. **Use strong NEXTAUTH_SECRET** - generate with `openssl rand -base64 32`
7. **Enable CORS strictly** - only allow your domain
8. **Log all auth failures** - for security monitoring

---

## Performance Notes

- **In-memory storage**: Max ~100K connected users per socket server instance
- **For larger scale**: Deploy multiple socket servers behind a load balancer with Redis adapter
- **Cleanup**: Rate limiter automatically cleans expired entries every 5 minutes
- **Memory footprint**: ~1KB per connected user + rate limit tracking

---

## Support & Issues

- Check logs: Look in `lib/socket/logger.js` output
- Enable debug mode: `localStorage.debug = '*'` in browser console
- Test locally first: `npm run dev` then `npm run socket`
