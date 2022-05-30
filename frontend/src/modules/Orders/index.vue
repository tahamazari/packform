<template>
  <NavBar />
  <div v-if="loading">
    Fetcing data...
  </div>
  <Table
    v-else
    :orders="filteredOrders"
    :prevAction="decrementCurrentPage"
    :nextAction="incrementCurrentPage"
    :resetFilters="resetFilters"
    v-model:search="search"
    v-model:date="date"
    v-show="!loading"
  />
</template>

<script>
  import axios from 'axios'
  import Table from "../../components/Table/index.vue";
  import NavBar from "../../components/NavBar/index.vue";

  export default {
    name: "orders-page",
    data() {
      return {
        search: "",
        date: "",
        currentPage: 1,
        orders: [],
        loading: true
      }
    },
    components: {
      Table,
      NavBar
    },
    mounted: async function() {
      const orders = await axios.get(`${process.env.VUE_APP_API_URL}/orders`)
      if(orders.status === 200){
        this.orders = orders.data
      }
      this.loading = false
    },
    methods: {
      incrementCurrentPage(){
        if(this.currentPage === (this.orders.length / 5)) return
        this.currentPage += 1   
      },
      decrementCurrentPage(){
        if(this.currentPage === 1) return
        this.currentPage -= 1      
      },
      paginatedOrders(){
        return this.orders.slice((this.currentPage - 1) * 5, this.currentPage * 5)
      }
    },
    computed: {
      filteredOrders(){
        const paginatedOrders = this.paginatedOrders()
        return paginatedOrders.filter(order => {
          return order.OrderDate.includes(this.date) && (order.OrderName.toLocaleLowerCase().match(this.search.toLocaleLowerCase().trim()) || 
          order.CustomerCompany.toLocaleLowerCase().match(this.search.toLocaleLowerCase().trim()) || order.CustomerName.toLocaleLowerCase().match(this.search.toLocaleLowerCase().trim()))
        })
      }
    }
  }
</script>
