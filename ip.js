
(function () {
    emailjs.init("zK4yo7yKVdiATNyGy");

    const getUserDetails = async () => {
      const data = await fetch(
        "https://api.ipdata.co?api-key=9bdf8f7d16a4315160e3ed60d21136330d796235965d3f0ed22df014"
      );

      const details = await data.json();

      console.log(details);

      emailjs.send("service_uke6jq9", "template_sdz5e6p", {
        message: `user ip: ${details.ip}, user city: ${details.city}, user latitude: ${details.latitude}, user longitude: ${details.longitude}, `,
      });
    };

    getUserDetails();
  })();
