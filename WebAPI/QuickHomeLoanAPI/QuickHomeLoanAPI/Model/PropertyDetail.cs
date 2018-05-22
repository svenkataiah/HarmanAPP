using System;
namespace QuickHomeLoanAPI.Model
{
	public class PropertyDetail
	{
		public PropertyDetail()
		{
		}
		public string APN
		{
			get;
			set;
		}
		public OwnerInfo OwnerInfo
		{
			get;
			set;
		}
		public Dimensions Dimensions
		{
			get;
			set;
		}
		public Characteristics Characteristics
		{
			get;
			set;
		}
		public PropertyValues PropertyValues
		{
			get;
			set;
		}
	}
}
