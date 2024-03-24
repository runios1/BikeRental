const getBikesByRequest = async (requests) => {
  const bikePromises = requests.map(async (request) => {
    const response = await fetch(
      `http://localhost:5500/bikes/${request.bikeID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch bike. Please try again.");
    }
    const bike = await response.json();
    return bike;
  });

  const bikes = await Promise.all(bikePromises);
  return bikes;
};

export default getBikesByRequest;
