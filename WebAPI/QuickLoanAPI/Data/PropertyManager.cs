using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
                    City = "MISSION VIEJO",
                    State = "CA",
                    ZipCode = "92692",
                    StreetAddress = "27911 ENCANTO"
                },
                PropertyAddress = address,
                OwnerFirstName = "DIXON BRIAN L / DIXON PAMELA T",
                OwnerLastName = "",
                OwnerPhone = "6986986986",
                APN = "AKJHU8656876",
                NoOfStories = "2",
                YearBuilt = "2006",
                LotAreaAcres = "0.1584",
                LotAreaSquareFeet = "6900",
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
                LastSold ="1890765",
                PricePerSqrt="690",
                PropertyStyle = "Single Family Residency",
                LastMortgaged = "98765",
                BedRoom = 3,
                BathRoom = 2
            };
        }
    }
}
