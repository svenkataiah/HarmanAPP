namespace QuickLoanAPI.Model.DbEntity
{
    public class OwnerInfo
    {
        public OwnerInfo()
        {
        }
        public string Name
		{
			get;
			set;
		}
        public string Phone
		{
			get;
			set;
		}
        public Address Address { get; set; }
    }
}
