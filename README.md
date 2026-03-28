# NestJS Advanced Concepts

A NestJS project exploring advanced framework concepts through practical implementations.

## Project setup

```bash
pnpm install
```

## Compile and run the project

```bash
# development
pnpm run start

# watch mode
pnpm run start:dev

# production mode
pnpm run start:prod
```

## Run tests

```bash
# unit tests
pnpm run test

# e2e tests
pnpm run test:e2e

# test coverage
pnpm run test:cov
```

## Concepts covered

### Dynamic Modules (`HttpClientModule`)
`HttpClientModule` is built with `ConfigurableModuleBuilder`, supporting both sync (`register`) and async (`registerAsync`) configuration. Accepts a `baseUrl` option and an `isGlobal` extra that controls whether the module is registered globally.

### DI Sub-trees — Multi-tenancy
`AggregateByTenantContextIdStrategy` implements `ContextIdStrategy` to create a separate DI sub-tree per tenant. The tenant is resolved from the `x-tenant-id` request header. Durable providers share one instance per tenant; non-durable providers remain per-request.

### DI Sub-trees — i18n / Locale
`AggregateByLocaleContextIdStrategy` implements the same pattern for locale. The locale is resolved from the `Accept-Language` header using `accept-language-parser`. Durable providers share one instance per locale code.

### Worker Threads (`FibonacciModule`)
`FibonacciWorkerHost` offloads CPU-intensive Fibonacci computation to a dedicated `worker_thread`. Communication uses `postMessage` / `fromEvent` (RxJS) with unique request IDs so concurrent calls are correlated correctly.

### Custom Scheduler
A metadata-driven interval scheduler built on top of `DiscoveryService` and `MetadataScanner`:
- `@IntervalHost` — marks a class as a source of scheduled methods.
- `@Interval(ms)` — marks a method to be called on the given interval.
- `IntervalScheduler` scans all providers at bootstrap, reads the metadata, and registers `setInterval` calls. All intervals are cleared on shutdown.
- `CronService` demonstrates usage by logging every second.

### Event-Driven Architecture (`PaymentsModule`)
`PaymentsWebhookController` emits a `PaymentFailedEvent` via `EventEmitter2`, passing a manually created `ContextId` so that request-scoped services (`NotificationsService`, `SubscriptionsService`) can be resolved within the event handler without an HTTP request context.

### Circuit Breaker Interceptor
`CircuitBreakerInterceptor` maintains a `WeakMap` of `CircuitBreaker` instances keyed by route handler. Each handler gets its own circuit breaker, providing per-endpoint failure isolation.

### `EntityExistsPipe` factory
A generic pipe factory: `EntityExistsPipe(EntityClass)` returns a DI-injectable pipe that validates whether a given ID exists in the repository before the handler executes.

### `WithUuid` mixin
`WithUuid<TBase>` is a class mixin that adds a `uuid` property (auto-generated) and a `regenerateUuid()` method to any base class.

### Lazy-loaded modules (`RewardsModule`)
`RewardsService` demonstrates lazy module loading — the module is loaded on demand rather than at bootstrap.

### Durable providers (`DataSourceModule`)
`DataSourceService` is exported for use as a durable, request-scoped provider. Durable providers are instantiated once per DI sub-tree (e.g., per tenant or per locale) rather than once per request.
