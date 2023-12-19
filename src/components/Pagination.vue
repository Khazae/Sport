<template>
    <div class="tablePaginationPages">
        <div class="tablePaginationPage" v-for="(num, i) in pagination" :class="{'tablePaginationPageSpace':num=='...'}"
             :key="'pagination_index_'+i" @click="num=='...'?'':$emit('handleLoad',num)" :style="{'cursor:unset!important':num=='...'}"
        >
            <template v-if="num!=='...'">{{ num }}</template>
            <img v-else  src="../assets/tableSpace.svg" alt=""/>
        </div>
    </div>
</template>

<script>
export default {
    name: "PaginationComponent",
    props: {
        last: {
            type: Number
        },
        current: {
            type: Number
        }
    },
    data() {
        return {
            pagination: []
        };
    },
    watch: {
        current: {
            handler: function (to, from) {
                if (to != from)
                    this.getPagination();
            },
            deep: true
        },
        last: {
            handler: function (to, from) {
                if (to != from)
                    this.getPagination();
            },
            deep: true
        }
    },
    methods: {
        getPagination() {
            let tmp = [];
            for (let i = 0; i < this.last; i++) {
                tmp.push(i + 1);
            }
            let new_arr = [];
            if (tmp.length > 6) {
                if (this.current > 2 && this.current < this.last - 1) {
                    new_arr[0] = 1;
                    if (this.current > 3) {
                        new_arr[1] = '...';
                    }
                    new_arr = new_arr.concat(tmp.slice(this.current - 2, this.current + 1));
                    if (this.current < this.last - 2)
                        new_arr[new_arr.length] = '...';
                } else if (this.last - 2 < this.current) {
                    new_arr[0] = 1;
                    new_arr[1] = '...';
                    new_arr = new_arr.concat(tmp.slice(this.current - 3, this.current + 1));
                } else {
                    new_arr = new_arr.concat(tmp.slice(0, 4));
                    new_arr[new_arr.length] = '...';
                }
                if (this.current < this.last - 1)
                    new_arr[new_arr.length] = this.last;
                this.pagination = new_arr;
            } else {
                this.pagination = tmp;
            }

        }

    },
    mounted() {
        this.getPagination();
    }
};
</script>

<style scoped>
.tablePaginationPages {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-left: 16px;
}

.tablePaginationPage {
    font-size: 14px;
    font-weight: 500;
    color: var(--color-black);
    padding: 7px 15.5px;
    cursor: pointer;
}
</style>