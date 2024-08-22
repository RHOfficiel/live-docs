import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://f83054059e1a9eb336ee4fe130f842ad@o4507821815234560.ingest.de.sentry.io/4507821821263952",

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // If the entire session is not sampled, use the below sample rate to sample
  // sessions when an error occurs.
  replaysOnErrorSampleRate: 1.0,

  integrations: [
    Sentry.replayIntegration({
      // Additional SDK configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
});