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
        public string FullAddress { get; set; }
        public string Name { get; set; }
        public string Longitude { get; set; }
        public string Latitude { get; set; }
    }
}
