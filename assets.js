const hey = {
  "success": true,
  "data": {
     "1785444": {
         "channels": [
             {
                "source_id": "69022177",
                "short_name": "WGCLDT",
                "full_name": "WGCL HDTV",
                "call_letters": "WGCLDT",
                "official_call_sign": "WGCL-DT",
                "source_type": "Broadcast",
                "time_zone": "ET"
            },
            {
                "source_id": "69049409",
                "short_name": "KOLR",
                "full_name": "KOLR",
                "call_letters": "KOLR",
                "official_call_sign": "KOLR-TV",
                "source_type": "Broadcast",
                "time_zone": "CT"
           }
        ]
     }
  }
}

console.log(hey.data[1785444].channels);
let channelData = [];
const channelList = hey.data[1785444].channels.map((channel, index) => {
  console.log("channels");
  return(
    
      channelData = [...channelData,
       {
        full_name: channel.full_name
       }
      ]
    
  )
})
console.log("channelData", channelData);


