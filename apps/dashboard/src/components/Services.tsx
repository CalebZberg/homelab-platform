import { useEffect, useState } from "react";


type Service = {
  name: string;
  status: string;
};


function Services() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetch("http://192.168.1.100:8000/services")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      })
      .catch((error) => {
        console.error("Error fetching services: ", error);
      });
  }, []);


  return(
    <section>
      <h2>Services</h2>

      {services.map((service) => (
        <div key={service.name}>
	  <h3>{service.name}</h3>
          <p>Status: {service.status}</p>
	</div>
      ))}

    </section>
  );
}

export default Services;
