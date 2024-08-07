

type AppConfig = {
    pageCapacity: number;
    tableHeadings: Array<string>;
    url: string;
}

export const config: AppConfig = {
    pageCapacity: 10,
    tableHeadings: [
        "Select All",
        "Name",
        "Email",
        "Role",
        "Actions"
      ],
    url: 'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json'
}