<template>
  <div class="header">
    <div class="head-mearge">
      <div class="wrap-header">
        <img class="company-logo" src="src\assets\images\headerBankLogo.svg" />
        <div class="divider"></div>
        <p class="company-name">ABC Pvt. Ltd.</p>
      </div>
      <div class="flex">
        <img
          class="notification-icon"
          src="src\assets\images\notificationBellIcon.svg"
        />
        <div>
          <div class="wrap-profile-icon">
            <img
              class="profile-icon-circle"
              src="src\assets\images\profileIconCircle.svg"
            />
            <div class="profile-icon-name">{{ getUserInitials }}</div>
          </div>
        </div>
          <img
            class="drop-down-arrow"
            src="src\assets\images\profileSettingDropDownArrow.svg"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      username: ""
    };
  },

  methods: {
    setUserInitials() {
      this.$store.dispatch("nameInitials");
    }
  },
  computed: {
    getUserInitials() {
      return this.$store.state.initials;
    }
  },
  mounted() {
    this.setUserInitials();
  }
};
</script>
<style scoped>
.drop-down-arrow {
  display: none;

}
.header {
  height: 72px;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
}
.head-mearge {
  height: 51px;
  padding-left: 12px;
  padding-top: 12px;
  padding-bottom: 9px;
  display: flex;
}

.wrap-header {
  width: 169px;
  display: flex;
  flex-direction: column;
  margin-right: 0px;
}

.company-logo {
  width: 200px;
  height: 40px;
}
.company-name {
  width: 89px;
  height: 19px;
  font-weight: bold;
  font-size: 14px;
}
.flex {
  display: flex;
  flex-wrap: wrap;
  width: 1550px;
  justify-content: flex-end;
}
.notification-icon {
  margin-left: 80px;
  margin-top: 0px;
  margin-right: 20px;
}
.wrap-profile-icon {
  margin-left: 14.02px;
  margin-top: 5px;
  display: block;
  margin-right: 10px;
}
.gr {
  display: block;
}
.profile-icon-name {
  margin-top: -35px;
  font-size: 16px;
  margin-left: 7px;
  color: rgb(255, 255, 255);
}

@media screen and (min-width: 768px) {
  div.wrap-header {
    flex-direction: row;
    width: auto;
  }
  img.company-logo {
    margin-left: 20px;
    margin-top: 6px;
  }
  p.company-name {
    font-size: 25px;
    width: 170px;
    height: 33px;
    margin-top: 10px;
    margin-left: 32px;
  }
  .drop-down-arrow {
    padding-right: 50px;
    display: block;
  }
  div.divider {
    width: 1px;
    height: 40px;
    margin-top: 6px;
    background: #c4c4c4;
    display: block;
    margin-left: 32px;
  }
}
</style>
