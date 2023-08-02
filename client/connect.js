export async function searchBackend(searchValue) {
    try {
        const response = await fetch('http://localhost:3000/search/' + searchValue);
        const data = await response.json();
    
        var jsonDataString = JSON.stringify(data);
        
    
        var jsonData = JSON.parse(jsonDataString);
    
        var jeep_code = jsonData.data[0]["jeep_code"];
        var landmark1 = jsonData.data[0]["landmark1"];
        var landmark2 = jsonData.data[0]["landmark2"];
    
        var result_string = "Jeep Code: " + jeep_code + "<br>Landmark 1: " + landmark1 + "<br>Landmark 2: " + landmark2;
        
        return result_string;
      } catch (error) {
        console.error('Error fetching data:', error);
        return null; // or throw an error, depending on your requirements
      }
  }

export async function showSearch(val) {
    const result_string = await searchBackend(val);
    console.log(result_string);
    return result_string
  
}