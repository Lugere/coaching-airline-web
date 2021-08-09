import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class ProgressBar extends Vue {
    @Prop() length!: number;
}
