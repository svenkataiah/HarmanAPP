using QuickLoanAPI.Model.DbEntity;

namespace QuickLoanAPI.Data
{
    public class PropertyManager
    {

        public PropertyDetail GetPropertyDetail(Address address)
        {
            return new PropertyDetail()
            {
                OwnerAddress = new Address
                {
                    FullAddress= "43 Mosely Ave, Staten Island, NY 10312",
                    City = "Staten Island",
                    State = "NY",
                    ZipCode = "10312",
                    StreetAddress = "43 Mosely Ave",
                    StreetAddress1 = ""
                },
                PropertyAddress = address,
                OwnerFirstName = "MATHEW",
                OwnerLastName = "JACOB",
                OwnerPhone = "6986986986",
                APN = "AKJHU8656876",
                NoOfStories = "2",
                YearBuilt = "2003",
                LotAreaAcres = "0.1584",
                LotAreaSquareFeet = "4500",
                LotAreaDepth = "",
                LotAreaWidth = "",
                AssessedValue = "97898",
                AssessedYear = "2017",
                ImprovmentValue = "456346",
                LandValue = "56546",
                MarketValue = "4573466",
                SaleValue = "3568235",
                TaxArea = "TX",
                TotalTaxableValue = "879658",
                PropertyType ="Single Family Home",
                LastSold = "780000",
                PricePerSqrt= "222",
                PropertyStyle = "Modern wooden building",
                LastMortgaged = "670000",
                BedRoom = 3,
                BathRoom = 2
            };
        }
    }
}
