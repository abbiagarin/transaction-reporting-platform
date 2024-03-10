export interface cardAcquirerProps {
  name: string;
  logo: any;
  transactionValue: number;
  transactionRate: {
    successful: number;
    failed: number;
  };
}
