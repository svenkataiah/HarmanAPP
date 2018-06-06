﻿using System;
using System.IO;
using System.Net;

namespace QuickHomeLoanAPI.Manager
{
	public class Notification {
		public string[] registration_ids { get; set; }
        public NotificationData data
		{
			get;
			set;
		}
	}
	public class NotificationData{
		public string message { get; set; }
	}
	public class NotificationManager
	{
		public NotificationManager()
		{
		}
		public String SendNotificationFromFirebaseCloud()
		{
			var result = "-1";
			var serverKey = "AIzaSyAHaXxhR2bPClCvXkPcf1zOFIV6H4d6OBI";
			var senderId = "623706415166";
			var webAddr = "https://fcm.googleapis.com/fcm/send";
			var httpWebRequest = (HttpWebRequest)WebRequest.Create(webAddr);
			httpWebRequest.ContentType = "application/json";
			httpWebRequest.Headers.Add(string.Format("Authorization: key={0}", serverKey));
			httpWebRequest.Headers.Add(string.Format("Sender: id={0}", senderId));

			//httpWebRequest.Headers.Add(HttpRequestHeader.Authorization, "key=AAAA_mdH7ws:APA91bE0eBbB3RfM-9yi5U-FhTdp7es8EbkeYW9x7G1a0w7i_7hoenxrCnEkJVp6eHfOZ9s4LoHmeEI0SD2hVpvzKYjjKqYOkXz0rjhhQ60WMXBYyDq4-cSwtF17PN3BJ2VK0UoJt227");
			httpWebRequest.Method = "POST";
			using (var streamWriter = new StreamWriter(httpWebRequest.GetRequestStream()))
			{
				var regID = "edIcORW6tYc:APA91bGtJXmYiguuxJNoIh5d9zV0cZPQyHXcRvwlZm3IQFZ_ytkloUIgSUErK3IpKCeRp7uDrkJUguEHUBOicegmpffo8plFIB3MiXKV5Kbc3xt6WA_aNFIR_7BL3nIO3L-tJMlTxeCP";
				string json = "{\"registration_ids\": [\"" + regID + "\"],\"data\": {\"message\": \"20% deal today!!\",}}";
                 
        
				streamWriter.Write(json);
				streamWriter.Flush();
			}

			var httpResponse = (HttpWebResponse)httpWebRequest.GetResponse();
			using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
			{
				result = streamReader.ReadToEnd();
			}
			return result;
		}
	}
}