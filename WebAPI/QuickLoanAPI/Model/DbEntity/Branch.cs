namespace QuickLoanAPI.Model.DbEntity
{
    public class Branch
    {
        public int Id { get; set; }
        public string BranchCode
        {
            get;
            set;
        }
        public string Name { get; set; }
        public int AddressId { get; set; }
        public Address Address { get; set; }
    }
}
