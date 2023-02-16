<template>
	<Header />
	<div id="contact-page" class="container">
    	<div class="bg">
	    	<div class="row" style="margin-bottom: 50px;">    		
	    		<div class="col-sm-12">    			   			
					<h2 class="title text-center">إضافة منتج جديد</h2>    			    				    				
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
				                <input type="text" name="name" class="form-control" v-model="this.$store.state.name" required="required" placeholder="اسم المنتج">
				            </div>
				            <div class="form-group col-md-6">
				                <input type="number" name="number" class="form-control" v-model="this.$store.state.price" required="required" placeholder="السعر">
				            </div>
				            <div class="form-group col-md-6">
                                <select name="subject" class="form-control" v-model="this.$store.state.options">
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
				                <input type="file" name="image" class="form-control" placeholder="اختر صورة المنتج">
								
				            </div>
				            <div class="form-group col-md-12">
				                <textarea name="message" id="message" required="required" v-model="this.$store.state.discrption" class="form-control" rows="8" placeholder="وصف المنتج أو نبذة عنه"></textarea>
				            </div>                        
				            <div class="form-group col-md-12">
				                <!-- <input type="submit" name="submit" class="btn btn-primary pull-right" value="اضافة"> -->
								<button class="btn btn-primary pull-right" @click="saveProducts()" > اضافة</button> <br>
				            </div>
				        </form>
	    			</div>
	    		</div>
	    	</div>  
    	</div>	
    </div><!--/#contact-page-->
	<!-- <div v-for="item in this.$store.state.products" :key="item" >
					<p>{{ item.name }}</p>
					<p>{{ item.price }}</p>
					<p>{{ item.discrption }}</p>
					<p>{{ item.options }}</p>
					<p>{{ item.date }}</p>
	</div> -->
	<Footer />
</template>

	
<script>
	import Header from '@/components/Header.vue'
	import Footer from '@/components/Footer.vue'
	
	export default {
	  name: 'HomeView',
	  data() {
		return {
			
		}
	  },
	  created() {
		if (localStorage.products) {
			this.$store.state.products=JSON.parse(localStorage.products);
		}
	  },
	  methods: {
		// addItem(){
		// 	this.products.push({'name':this.$store.state.name},
		// 	{'price':this.$store.state.price},
		// 	{'discrption':this.$store.state.discrption},
		// 	{'date':this.$store.state.date},
		// 	{'options':this.$store.state.options});
		// },
		saveProducts(){
			this.$store.state.products.push(
			{'name':this.$store.state.name ,
			'price':this.$store.state.price,
			'discrption':this.$store.state.discrption,
			'date':this.$store.state.date,
			'imgSrc':this.$store.state.imgSrc,
			'options':this.$store.state.options},
			);
			localStorage.products=JSON.stringify(this.$store.state.products);
		},
	  },
	  components: {
		Header,
		Footer
	  }
	}
	</script>