export const options = {
    thresholds: {
      metric_name1: ['threshold_expression' /* ...*/], // short format
      metric_name1: [
        {
          threshold: 'threshold_expression',
          abortOnFail: true, // boolean
          delayAbortEval: '10s', // string
        },
      ], // full format
    },
  };
  