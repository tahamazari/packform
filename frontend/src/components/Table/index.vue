<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-indigo-700 text-left mb-5">Orders</h1>
      </div>
    </div>
    <div class="flex w-full">
      <div class="w-1/2 flex">
        <div>
          <label for="search-order" class="sr-only">Search Order</label>
          <input 
            @input="$emit('update:search', $event.target.value)" 
            type="text" name="search-order" id="search-order" 
            class="p-1 w-56 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-sm" 
            placeholder="search..." data-test="input-search-order-part"/>
        </div>
        <div class="ml-10">
          <input 
            type="date"
            placeholder="Search by date"
            v-model="date"
            @input="$emit('update:date', $event.target.value)"
            data-test="input-search-order-date"
          />
        </div>
      </div>
      <div class="w-1/2">
        <div class="w-full flex items-end justify-end">
          <span class="relative z-0 inline-flex shadow-sm rounded-md">
            <button 
              v-on:click="prevAction" 
              type="button"
              data-test="button-order-prev"
              class="relative inline-flex items-center px-4 py-1 rounded-l-md border border-indigo-700 bg-indigo-500 text-sm font-medium text-white focus:z-10"
            >
              Prev
            </button>
            <button 
              v-on:click="nextAction" 
              type="button"
              data-test="button-order-next"
              class="-ml-px relative inline-flex items-center px-4 py-1 rounded-r-md border border-indigo-700 bg-indigo-500 text-sm font-medium text-white focus:z-10"
            >
              Next
            </button>
          </span>
        </div>
      </div>
    </div>
    <div class="mt-4 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-indigo-500">
                <tr>
                  <th scope="col" class="pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Name</th>
                  <th scope="col" class="py-3.5 text-left text-sm font-semibold text-white">Customer Company</th>
                  <th scope="col" class="py-3.5 text-left text-sm font-semibold text-white">Customer</th>
                  <th scope="col" class="py-3.5 text-left text-sm font-semibold text-white">Date</th>
                  <th scope="col" class="py-3.5 text-left text-sm font-semibold text-white">Delivered Amount</th>
                  <th scope="col" class="py-3.5 text-left text-sm font-semibold text-white">Total Amount</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="order in orders" :key="order.id">
                  <td class="whitespace-nowrap py-4 text-left text-sm font-medium text-gray-900 sm:pl-6">{{ order.OrderName }}</td>
                  <td class="whitespace-nowrap py-4 text-left text-sm text-gray-500">{{ order.CustomerCompany }}</td>
                  <td class="whitespace-nowrap py-4 text-left text-sm text-gray-500">{{ order.CustomerName }}</td>
                  <td class="whitespace-nowrap py-4 text-left text-sm text-gray-500">{{ order.OrderDate.slice(0, 10) }}</td>
                  <td class="whitespace-nowrap py-4 text-left text-sm text-gray-500">${{ order.DeliveredAmount }}</td>
                  <td class="whitespace-nowrap py-4 text-left text-sm text-gray-500">${{ order.TotalAmount }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "custom-table",
    props: {
      orders: {
        type: Array,
        required: true
      },
      prevAction: {
        type: Function,
        required: true
      },
      nextAction: {
        type: Function,
        required: true
      }
    }
  };
</script>