namespace QuickLoanAPI.Model.DbEntity
{
    public class PropertyDetail
	{
		public PropertyDetail()
		{
		}
        public int Id { get; set; }
        public string APN
		{
			get;
			set;
		}
        public string PropertyType { get; set; }
        public Address PropertyAddress
        {
            get;
            set;
        }
        public string OwnerFirstName
        {
            get;
            set;
        }
        public string OwnerLastName
        {
            get;
            set;
        }
        public string OwnerPhone
        {
            get;
            set;
        }
        public Address OwnerAddress { get; set; }
        public string LotAreaWidth
        {
            get;
            set;
        }
        public string LotAreaDepth
        {
            get;
            set;
        }
        public string LotAreaSquareFeet
        {
            get;
            set;
        }
        public string LotAreaAcres
        {
            get;
            set;
        }
        public string NoOfStories
        {
            get;
            set;
        }
        public string YearBuilt
        {
            get;
            set;
        }
        public string TaxArea
        {
            get;
            set;
        }
        public string AssessedYear
        {
            get;
            set;
        }
        public string AssessedValue
        {
            get;
            set;
        }
        public string TotalTaxableValue
        {
            get;
            set;
        }
        public string ImprovmentValue
        {
            get;
            set;
        }
        public string LandValue
        {
            get;
            set;
        }
        public string MarketValue
        {
            get;
            set;
        }
        public string SaleValue
        {
            get;
            set;
        }
        public string LastSold { get; set; }
        public string PricePerSqrt { get; set; }
        public string PropertyStyle { get; set; }
        public string LastMortgaged { get; set; }
        public int BedRoom { get; set; }
        public int BathRoom { get; set; }
    }
}
