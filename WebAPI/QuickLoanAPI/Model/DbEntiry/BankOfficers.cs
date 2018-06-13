namespace QuickLoanAPI.Model.DbEntity
{
    public class BankOfficer
    {
        public int Id { get; set; }
        public string Branch
        {
            get;
            set;
        }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public User OnlineUser { get; set; }
    }
}
