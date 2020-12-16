import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import Video from './Video';
import VideoSchema from '../../model/VideoSchema';

@InputType()
class VideoType {
  @Field()
  description: String;
  @Field()
  name: String;
  @Field()
  category: String;
}

@Resolver(Video)
class VideoResolver {

  @Query(() => [Video])
  async categories() {
    const videos = await VideoSchema.find();
    return videos;
  }

  @Mutation(() => Video)
  async createVideos( @Arg("categoryInput") vType;: VideoType) {
    const video = await VideoSchema.create(vType);
    return video;
  }

}

export default CategoryResolver;