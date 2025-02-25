function cacheExample() {
  var cache = CacheService.getScriptCache();
  var cachedData = cache.get("myData");
  if (cachedData) {
    Logger.log("Cached Data: " + cachedData);
  } else {
    var data = "Fresh data generated at " + new Date();
    cache.put("myData", data, 1500); // cache for 25 minutes
    Logger.log("Data cached: " + data);
  }
}

