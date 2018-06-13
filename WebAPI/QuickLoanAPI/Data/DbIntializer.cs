using System.Collections.Generic;
using System.Linq;
using QuickLoanAPI.Model.DbEntity;

namespace QuickLoanAPI.Data
{

    public static class DbInitializer
    {
        public static void Initialize(QuickLoanDbContext context)
        {
            context.Database.EnsureCreated();
            //InitialiseLoanOptions(context);
            // Look for any users.
            if (context.Users.Any())
            {
                return;   // DB has been seeded
            }
            InitialiseAccount(context);

            IntialiseBanker(context);

            InitialiseLoanOptions(context);
        }

        private static void IntialiseBanker(QuickLoanDbContext context)
        {
            var bankOfficers = new BankOfficer[]
           {
            new BankOfficer{
            FirstName = "ERIC",
            LastName = "JHON",
            Branch ="BR0002",
            OnlineUser = new User{
                UserId = "eric",
                Password = "eric",
                UserType = 1
            } }
           };

            foreach (BankOfficer bo in bankOfficers)
            {
                context.BankerOfficers.Add(bo);
            }
            context.SaveChanges();
        }

        private static void InitialiseAccount(QuickLoanDbContext context)
        {
            var accounts = new Account[]
            {
            new Account{
            FirstName = "BRENNA ANNA C",
            LastName = "MURPHY",
            Number ="8976890760",
            Addresses = new List<Address> {
            new Address {
                AddressType = "PERM",
                StreetAddress ="",
                City ="",
                State ="",
                Country ="",
                ZipCode =""
            },
            new Address {
                AddressType = "RESI",
                StreetAddress ="",
                City ="",
                State ="",
                Country ="",
                ZipCode =""
            }
            },
            Branch ="BR0001",
            OnlineUser = new User{
                UserId = "amurphy",
                Password = "murphy",
                UserType = 3
            } }
            };

            foreach (Account account in accounts)
            {
                context.Accounts.Add(account);
            }
            context.SaveChanges();
        }

        private static void InitialiseLoanOptions(QuickLoanDbContext context)
        {
            var loanOptions =  new List<LoanOptions>{
                        new LoanOptions {
                            Tenure = "5 Years",
                            LoanAmount = 100000.00m,
                            EMIAmount = 1887.22m,
                            InterestRate = "5.00",
                            LoanSchedule = new List<LoanSchedule>(){
                                    new LoanSchedule{
                                                TenureYear = "2018",
                                                PrincipalPaid = 8915.12m,
                                                InterestPaid = 2407.60m,
                                                Balance = 91084.88m
                                    },
                                    new LoanSchedule{
                                                TenureYear = "2019",
                                                PrincipalPaid = 18511.59m,
                                                InterestPaid = 4133.85m,
                                                Balance = 72573.29m
                                            },
                                    new LoanSchedule{
                                                TenureYear = "2020",
                                                PrincipalPaid = 19458.66m,
                                                InterestPaid = 3186.78m,
                                                Balance = 53114.63m
                                            },
                                    new LoanSchedule{
                                                TenureYear = "2021",
                                                PrincipalPaid = 20454.23m,
                                                InterestPaid = 2191.21m,
                                                Balance = 32660.40m
                                            },
                                    new LoanSchedule{
                                                TenureYear = "2022",
                                                PrincipalPaid = 21500.69m,
                                                InterestPaid = 1144.75m,
                                                Balance =11159.71m
                                            },
                                    new LoanSchedule{
                                                TenureYear = "2023",
                                                PrincipalPaid = 11159.71m,
                                                InterestPaid = 163.32m,
                                                Balance =0
                                    }
                                }
                        },
                        new LoanOptions{
                            Tenure = "10 Years",
                            LoanAmount = 100000.00m,
                            EMIAmount = 1000.60m,
                            InterestRate = "5.00",
                            LoanSchedule = new List<LoanSchedule>(){
                                    new LoanSchedule{
                                      TenureYear = "2018",
                                      PrincipalPaid = 3904.43m,
                                      InterestPaid = 2459.53m,
                                      Balance = 96095.57m
                                  },
                                  new LoanSchedule{
                                      TenureYear = "2019",
                                      PrincipalPaid = 8107.25m,
                                      InterestPaid = 4620.67m,
                                      Balance = 87988.32m
                                  },
                                  new LoanSchedule{
                                      TenureYear = "2020",
                                      PrincipalPaid = 8522.03m,
                                      InterestPaid = 4205.89m,
                                      Balance = 79466.29m
                                  },
                                  new LoanSchedule{
                                      TenureYear = "2021",
                                      PrincipalPaid = 8958.05m,
                                      InterestPaid = 3769.87m,
                                      Balance = 70508.24m
                                  },
                                  new LoanSchedule{
                                      TenureYear = "2022",
                                      PrincipalPaid = 9416.36m,
                                      InterestPaid = 3311.56m,
                                      Balance = 61091.88m
                                  },
                                  new LoanSchedule{
                                      TenureYear = "2023",
                                      PrincipalPaid = 9898.12m,
                                      InterestPaid = 2829.80m,
                                      Balance = 51193.76m
                                  },
                                  new LoanSchedule{
                                      TenureYear = "2024",
                                      PrincipalPaid = 10404.51m,
                                      InterestPaid = 2323.41m,
                                      Balance = 40789.25m
                                  },
                                  new LoanSchedule{
                                      TenureYear = "2025",
                                      PrincipalPaid = 10936.84m,
                                      InterestPaid = 1791.08m,
                                      Balance = 29852.41m
                                  },
                                  new LoanSchedule{
                                      TenureYear = "2026",
                                      PrincipalPaid = 11496.39m,
                                      InterestPaid = 1231.53m,
                                      Balance = 18356.02m
                                  },
                                  new LoanSchedule{
                                      TenureYear = "2027",
                                      PrincipalPaid = 12084.56m,
                                      InterestPaid = 643.36m,
                                      Balance = 6271.46m
                                  },
                                  new LoanSchedule{
                                      TenureYear = "2028",
                                      PrincipalPaid = 6271.46m,
                                      InterestPaid = 91.77m,
                                      Balance = 0
                                  }
                        }
                        },
                        new LoanOptions{
                            Tenure = "15 Years",
                            LoanAmount = 100000.00m,
                            EMIAmount = 600.45m,
                            InterestRate = "5.00",
                            LoanSchedule = new List<LoanSchedule>(){
                                  new LoanSchedule{
                                      TenureYear = "2018",
                                      PrincipalPaid = 2268.25m,
                                      InterestPaid = 2476.49m,
                                      Balance = 97731.75m
                                  },
                                  new LoanSchedule{
                                      TenureYear = "2019",
                                      PrincipalPaid = 4709.85m,
                                      InterestPaid = 4779.63m,
                                      Balance = 93021.90m
                                  },
                                  new LoanSchedule{
                                      TenureYear = "2020",
                                      PrincipalPaid = 4950.83m,
                                      InterestPaid = 4538.65m,
                                      Balance = 88071.07m
                                  },
                                  new LoanSchedule{
                                      TenureYear = "2021",
                                      PrincipalPaid = 5204.11m,
                                      InterestPaid = 4285.37m,
                                      Balance = 82866.96m
                                  },
                                  new LoanSchedule{
                                      TenureYear = "2022",
                                      PrincipalPaid = 5470.37m,
                                      InterestPaid = 4019.11m,
                                      Balance = 77396.59m
                                  },
                                  new LoanSchedule{
                                      TenureYear = "2023",
                                      PrincipalPaid = 5750.22m,
                                      InterestPaid = 3739.26m,
                                      Balance = 71646.37m
                                  },
                                  new LoanSchedule{
                                      TenureYear = "2024",
                                      PrincipalPaid = 6044.40m,
                                      InterestPaid = 3445.08m,
                                      Balance = 65601.97m
                                  },
                                  new LoanSchedule{
                                      TenureYear = "2025",
                                      PrincipalPaid = 6353.68m,
                                      InterestPaid = 3135.80m,
                                      Balance = 59248.29m
                                  },
                                  new LoanSchedule{
                                      TenureYear = "2026",
                                      PrincipalPaid = 6678.74m,
                                      InterestPaid = 2810.74m,
                                      Balance =52569.55m
                                  },
                                  new LoanSchedule{
                                      TenureYear = "2027",
                                      PrincipalPaid = 7020.43m,
                                      InterestPaid = 2469.05m,
                                      Balance = 45549.12m
                                  },
                                  new LoanSchedule{
                                      TenureYear = "2028",
                                      PrincipalPaid = 7379.62m,
                                      InterestPaid = 2109.86m,
                                      Balance = 38169.50m
                                  },
                                  new LoanSchedule{
                                      TenureYear = "2029",
                                      PrincipalPaid = 7757.18m,
                                      InterestPaid = 1732.30m,
                                      Balance = 30412.32m
                                  },
                                  new LoanSchedule{
                                      TenureYear = "2030",
                                      PrincipalPaid = 8154.04m,
                                      InterestPaid = 1335.44m,
                                      Balance = 22258.28m
                                  },
                                  new LoanSchedule{
                                      TenureYear = "2031",
                                      PrincipalPaid = 8571.22m,
                                      InterestPaid = 918.26m,
                                      Balance = 13687.06m
                                  },
                                  new LoanSchedule{
                                      TenureYear = "2032",
                                      PrincipalPaid = 9009.75m,
                                      InterestPaid = 479.73m,
                                      Balance = 4677.31m
                                  },
                                  new LoanSchedule{
                                      TenureYear = "2033",
                                      PrincipalPaid = 4677.31m,
                                      InterestPaid = 68.47m,
                                      Balance = 0.00m
                                  }
                            }
                        }
                };
            foreach (LoanOptions lo in loanOptions)
            {
                context.LoanOptions.Add(lo);
            }
            context.SaveChanges();
        }
    }
}
