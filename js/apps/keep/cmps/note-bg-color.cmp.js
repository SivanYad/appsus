export default {
    props: ['note'],
    template: `
 <div class="backround-container" >
    <div class= "background-Color-container">
        <div ref="noteBg" @click.stop="checkClass" class="clr1">🍔</div>
        <div ref="noteBg" @click.stop="checkClass" class="clr2">🍔</div>
        <div ref="noteBg" @click.stop="checkClass" class="clr3">🍔</div>
        <div ref="noteBg" @click.stop="checkClass" class="clr4">🍔</div>
        <div ref="noteBg" @click.stop="checkClass" class="clr5">🍔</div>
     </div>
     <div class= "background-img-container">
        <div ref="noteBg" @click.stop="checkClass" class="img1">🍔</div>
        <div ref="noteBg" @click.stop="checkClass" class="img3">🍔</div>
        <div ref="noteBg" @click.stop="checkClass" class="img4">🍔</div>
        <div ref="noteBg" @click.stop="checkClass" class="img5">🍔</div>
     </div>
 </div>
`,
    data() {
        return {
            noteBg: null,
        };
    },
    created() { },
    methods: {
        checkClass() {
            const div = this.$refs.noteBg
            this.noteBg = div.getAttribute('class')
            console.log(div);
        }
    },
    computed: {
    },
    unmounted() { 
    }
}