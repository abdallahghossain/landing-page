<template>
	<Header />
	<div id="contact-page" class="container">
    	<div class="bg">
	    	<div class="row" style="margin-bottom: 50px;">    		
	    		<div class="col-sm-12">    			   			
					<h2 class="title text-center">تعديل بيانات منتج</h2>    			    				    				
					<!--<div id="gmap" class="contact-map">
					</div>-->
				</div>			 		
			</div>    	
    		<div class="row">  	
	    		<div class="col-sm-8">
	    			<div class="contact-form">
	    				<div class="status alert alert-success" style="display: none"></div>
				    	<form id="main-contact-form" class="contact-form row" name="contact-form" >
				            <div class="form-group col-md-6">
				                <input type="text" name="name"  class="form-control" required="required" placeholder="اسم المنتج">
				            </div>
				            <div class="form-group col-md-6">
				                <input type="number" name="number" class="form-control" required="required" placeholder="السعر">
				            </div>
				            <div class="form-group col-md-6">
                                <select name="subject" class="form-control">
                                    <option>اكسسوريز</option>
                                    <option>عنايه</option>
                                    <option>مكياج</option>
                                    <option>شنط</option>
                                    <option>عطور</option>
                                    <option>اجهزه</option>
                                    <option>ملابس نساء</option>
                                    <option>رجال</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6">
				                <input type="file" name="image"  class="form-control"  placeholder="اختر صورة المنتج">
				            </div>
				            <div class="form-group col-md-12">
				                <textarea name="message" id="message" required="required" class="form-control" rows="8" placeholder="وصف المنتج أو نبذة عنه"></textarea>
				            </div>                        
				            <div class="form-group col-md-12">
								<button class="btn btn-primary pull-right"  > تعديل</button> <br>
								<!-- <input type="submit" name="submit" class="btn btn-primary pull-right" value="حفظ التعديلات"> -->
				            </div>
				        </form>
	    			</div>
	    		</div>
	    	</div>  
    	</div>	
    </div><!--/#contact-page-->
	<Footer />

</template>
	
<script>
	import Header from '@/components/Header.vue'
	import Footer from '@/components/Footer.vue'
	
	export default {
	  name: 'HomeView',
	  data() {
		return {
			// 'name':this.$store.state.name ,
			// 'price':this.$store.state.price,
			// 'discrption':this.$store.state.discrption,
			// 'date':this.$store.state.date,
			// 'imgSrc':this.$store.state.imgSrc,
			// 'options':this.$store.state.options,
		}
	  },
	  components: {
		Header,
		Footer
	  },
	//   methods:{
	// 	updateItem(){
	// 		this.$store.state.products[this.$route.params.id].name=this.name;
	// 		this.$store.state.products[this.$route.params.id].price=this.price;
	// 		this.$store.state.products[this.$route.params.id].discrption=this.discrption;
	// 		this.$store.state.products[this.$route.params.id].options=this.options;
	// 		localStorage.products=JSON.stringify(this.$store.state.products);
	// 		this.$router.push({path:'/updateProduct'});
	// 	}
	//   }
	}
	</script>