export default {
 template: `
 <!-- <a ref="inbox"  @click="changeStatus">Inbox</a>
 <a ref="sent" @click="changeStatus" >Sent</a>
 <a ref="star" @click="changeStatus">Starred</a>
 <a ref="trash" @click="changeStatus">Trash</a> -->
 <ul class="clean-list">
    <li>
        <label>Inbox<input type="radio" v-model="status" value="inbox" @change="changeStatus"></label>
    </li>
    <li>
        <label>Sent<input type="radio" v-model="status" value="sent" @change="changeStatus" ></label>
    </li>
    <li>
        <label>Starred<input type="radio" v-model="status" value="star" @change="changeStatus" ></label>
    </li>
    <li>
        <label>Trash<input type="radio" v-model="status" value="trash" @change="changeStatus" ></label>
    </li>
 </ul>
 
`,
data() {
return {
    status: null
};
},
created() {},
methods: {
    changeStatus() {
        this.$emit("statusChanged", this.status)
    },
},
computed: {},
unmounted() {},
};