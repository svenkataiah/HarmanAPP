using QuickLoanAPI.Model.DbEntity;
using QuickLoanAPI.Repository;

namespace QuickLoanAPI.Data
{
    public class PropertyManager
    {
        public PropertyDetail GetPropertyDetail(Address address)
        {
            var propertyRepository = new PropertyRepository();
            return propertyRepository.GetPropertyDetail(address);
        }
    }
}
