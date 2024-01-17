export interface handlersDataProps {
  name: string;

  transactionCount: {
    successful: number;
    failed: number;
  };

  transactionValue: {
    successful: number;
    failed: number;
  };
}
