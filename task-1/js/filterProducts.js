import product_list from './productlist.js';
import {fetchProducts} from './product.js';

window.selectedCategories = {
        brand: [],
        color: [],
        price :{
            min: 12000,
            max: 1000000,
          },
          ratings:{
            min: 0,
            max: 5
          }
      };
      
      
      function updateSelectedCategories(event) {
        var name = event.target.name;
        var value = event.target.value;
      
        
        if (event.target.checked) {
          selectedCategories[name].push(value);
        } else {
          var index = selectedCategories[name].indexOf(value);
          selectedCategories[name].splice(index, 1);
        }
      }
      
      function updateRange(event) {
        var value = event.target.value;
        alert(this)
        console.log(this)
        console.log(selectedCategories[event.target.name])
        selectedCategories[event.target.name].min= parseInt(value);
        selectedCategories[event.target.name].max= parseInt(event.target.max);
      }
      
    window.filterItems=function(event) {
        event.preventDefault();
        console.log(selectedCategories)
        var filteredItems = product_list.filter(function(item) {
          return (
            selectedCategories.brand.length === 0 ||
            selectedCategories.brand.indexOf(item.brand) !== -1
          ) &&
          (
            selectedCategories.color.length === 0 ||
            selectedCategories.color.indexOf(item.color) !== -1
          ) &&
          (item.price >= selectedCategories.price.min && item.price <= selectedCategories.price.max)
          && (
            item.ratings >= selectedCategories.ratings.min && item.ratings <= selectedCategories.ratings.max)
        });
        console.log(filteredItems) // Render the filtered items in the UI
        fetchProducts(filteredItems)
       
      }
      
      var brandCheckboxes = document.querySelectorAll('input[name="brand"]');
brandCheckboxes.forEach(function(checkbox) {
  checkbox.addEventListener("change", updateSelectedCategories);
});

var colorCheckboxes = document.querySelectorAll('input[name="color"]');
colorCheckboxes.forEach(function(checkbox) {
  checkbox.addEventListener("change", updateSelectedCategories);
});

var Range = document.querySelectorAll('input[type="range"]');
Range.forEach(function(range) {
  range.addEventListener("change", updateRange);
});

document.getElementById("filter-form").addEventListener("submit",filterItems)
