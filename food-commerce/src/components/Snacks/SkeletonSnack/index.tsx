import { Container } from "../styles"
import { Skeleton } from "../../Skeleton"

export function SkeletonSnack () {
    return (
        <Container>
            <Skeleton type="title"></Skeleton>
            <Skeleton type="thumbnail"></Skeleton>
            <Skeleton type="text"></Skeleton>
            <Skeleton type="text"></Skeleton>

            <div>
                <Skeleton type="title"></Skeleton>
                <Skeleton type="image"></Skeleton>
            </div>
        </Container>
    )
}