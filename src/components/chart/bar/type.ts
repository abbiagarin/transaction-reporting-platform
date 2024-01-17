export interface bankDataProps {
  name: string;
  logo: string;

  transactionCount: {
    successful: number;
    failed: number;
  };

  transactionValue: {
    successful: number;
    failed: number;
  };
}
