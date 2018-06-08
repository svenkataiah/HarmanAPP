using System;
namespace QuickLoanAPI.Model.DbEntity
{
	public class Notification
	{
		public Notification()
		{
		}
        public int Id { get; set; }
        public string Title
		{
			get;
			set;
		}
		public string Message
		{
			get;
			set;
		}
	}
}
