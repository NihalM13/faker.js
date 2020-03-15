var Mobiles = function (faker) {
	    var self = this;
	    var fake = faker.fake;
	  
	    /**
	     *      * vehicle
	     *           *
	     *                * @method faker.vehicle.vehicle
	     *                     */
	   
	  
	   
	  
	    /**
	     *      * manufacturer
	     *           *
	     *                * @method faker.vehicle.manufacturer
	     *                     */
	    self.color = function () {
		          return faker.random.arrayElement(faker.definitions.moiles.color);
		        };

	    self.brand = function () {
		            return faker.random.arrayElement(faker.definitions.mobiles.brand);
		          };
	 self.price = function () {
		         return faker.random.arrayElement(faker.definitions.mobiles.price);
		       };
	  

	  };
  
  module["exports"] = Mobiles;
