function findTopLeft(pointList) {
    var maxLat = null; 
    var minLon = null; 

    pointList.data.forEach(
        point => {
            if (maxLat == null) {
                maxLat = point.lat
                minLon = point.lon
            }
            else {
                if (point.lat > maxLat){
                    maxLat = point.lat
                }
                if (point.lon < minLon){
                    minLon = point.lon
                }
            }
        }
    )

    return{"pointId": 1, "lat":maxLat, "lon": minLon}
    
}

function findTopRight(pointList){
    var maxLat = null; 
    var minLon = null; 

    pointList.data.forEach(
        point => {
            if (maxLat == null) {
                maxLat = point.lat
                minLon = point.lon
            }
            else {
                if (point.lat > maxLat){
                    maxLat = point.lat
                }
                if (point.lon < minLon){
                    minLon = point.lon
                }
            }
        }
    )

        return{"pointId": 2, "lat":maxLat, "lon": minLon}

}

function findBottomLeft(pointList){
    var maxLat = null; 
    var minLon = null; 

    pointList.data.forEach(
        point => {
            if (maxLat == null) {
                maxLat = point.lat
                minLon = point.lon
            }
            else {
                if (point.lat > maxLat){
                    maxLat = point.lat
                }
                if (point.lon < minLon){
                    minLon = point.lon
                }
            }
        }
    )

        return{"pointId": 3, "lat":maxLat, "lon": minLon}

}

function findBottomRight(pointList){
    var maxLat = null; 
    var minLon = null; 

    pointList.data.forEach(
        point => {
            if (maxLat == null) {
                maxLat = point.lat
                minLon = point.lon
            }
            else {
                if (point.lat > maxLat){
                    maxLat = point.lat
                }
                if (point.lon < minLon){
                    minLon = point.lon
                }
            }
        }
    )

        return{"pointId": 4, "lat":maxLat, "lon": minLon}

}

function Run()
{
    // get the corners by creating functions which select an item from the data which has the correct values
    var topLeftPoint = findTopLeft(theJSON);
    var topRightPoint = findTopRight(theJSON);
    var bottomLeftPoint = findBottomLeft(theJSON);
    var bottomRightPoint = findBottomRight(theJSON);

    // make an output object containing the corner points
    var boundingBox = {
        topLeft: topLeftPoint,
        topRight: topRightPoint,
        bottomLeft: bottomLeftPoint,
        bottomRight: bottomRightPoint
    }

    console.log("Bounding box computed for hmdiaz_0823@tamu.edu: ");
    console.log(boundingBox);
}

