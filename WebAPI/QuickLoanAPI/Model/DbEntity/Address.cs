using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickLoanAPI.Model.DbEntity
{
    public class Address
    {
        public int Id { get; set; }
        public string AddressType { get; set; }
        public string StreetAddress { get; set; }
        public string StreetAddress1 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string ZipCode { get; set; }
        public string FullAddress { get; set; }
        public string Longitude { get; set; }
        public string Latitude { get; set; }
    }
}
