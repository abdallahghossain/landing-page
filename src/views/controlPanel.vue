<template>
  <Header />
  <section id="cart_items">
    <div class="container">
      <div class="breadcrumbs">
        <ol class="breadcrumb">
          <li><a href="#">الرئيسية</a></li>
          <li class="active">لوحة التحكم</li>
        </ol>
      </div>

      <h4 style="margin-bottom: 3rem">
        <router-link to="/addNewProduct">اضافة منتج جديد</router-link>
      </h4>

      <div class="table-responsive cart_info">
        <table class="table table-condensed">
          <thead>
            <tr class="cart_menu">
              <td class="image"> صورة المنتج  </td>
              <td class="description"></td>
              <td class="description">الصنف</td>
              <td class="price">السعر</td>
              <td class="price">تاريخ الاضافة</td>
              <td class="total">العمليات</td>
              <td></td>
            </tr>
          </thead>
          <tbody  v-for="item ,index in filteredList()" :key="item">
            <tr >
              <td class="cart_description">               
                  <img id="image" :src="item.imgSrc" width="70px" alt="" />               
              </td>
              <td class="cart_description">
                <p >{{ item.name }}</p>
              </td>
              <td class="cart_description">
                <p >{{ item.options }}</p>
              </td>
              <td class="cart_description">
                <p>{{ $filters.currencyUSD(item.price) }}</p>
              </td>
              <td class="cart_description">
                <p>{{ item.date }}</p>
              </td>


              <td class="cart_delete">
                <a class="cart_quantity_delete" @click="delItem(index)" 
                  ><i class="fa fa-times"></i
                ></a>
                <a  @click="updateItem()" class="cart_quantity_delete" 
                  ><i  class="fa fa-pencil-square-o"></i
                ></a>
                <router-link  to="" class="cart_quantity_delete" @click="detailItem(index)"
                  ><i class="fa fa-info-circle"></i
                ></router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  <!--/#cart_items-->
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",
  // created() {
	// 	if (localStorage.products) {
	// 		this.$store.state.products=JSON.parse(localStorage.products);
	// 	}
	//   },
  data() {
		return {
			name:this.$store.state.name ,
			price:this.$store.state.price,
			discrption:this.$store.state.discrption,
			date:this.$store.state.date,
			imgSrc:this.$store.state.imgSrc,
			options:this.$store.state.options,
		}
	  },
  methods: {
    delItem(index){
      this.$store.state.products.splice(index,1);
      localStorage.products=JSON.stringify(this.$store.state.products);
    },
    detailItem(index){ 
      this.$store.state.detailItem=index;
      this.$router.push({path:'/details'});

    },
    updateItem(){
			this.$store.state.products[this.$route.params.id].name=this.name;
			this.$store.state.products[this.$route.params.id].price=this.price;
			this.$store.state.products[this.$route.params.id].discrption=this.discrption;
			this.$store.state.products[this.$route.params.id].options=this.options;
			localStorage.products=JSON.stringify(this.$store.state.products);
			this.$router.push({path:'/updateProduct'});
		},
    filteredList() {
      var app=this;
      return this.$store.state.products.filter(function (item) {
        return (
          item.name.toLowerCase().indexOf(app.$store.state.search.toLowerCase()) !== -1||
          item.price.toString().includes(app.$store.state.search)
        );
      });
    },

  },
  components: {
    Header,
    Footer,
  },
};
</script>
<style scoped>
  #image{
    width: 70px;
  }
</style>
