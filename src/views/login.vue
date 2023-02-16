<template>
  <Header />
  <section id="form">
    <!--form-->
    <div class="container">
      <div class="row">
        <!--login form-->
        <div class="col-sm-6 col-sm-offset-1">
          <div class="login-form">
            <h2>التسجيل باستخدام حسابك</h2>
            <form action="#">
              <input
                type="email"
                placeholder="عنوان البريد الإلكتروني الخاص بك"
              />
              <input type="password" placeholder="كلمة المرور" />
              <button type="submit" class="btn btn-default">
                تسجيل الدخول
              </button>
              <br />
              <h4>
                <router-link to="/register"
                  >أو التسجيل كمستخدم جديد</router-link
                >
              </h4>
            </form>
          </div>
        </div>
        <!--/login form-->
      </div>
    </div>
  </section>
  <!--/form-->
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "login",
  components: {
    Header,
    Footer,
  },
};
</script>

