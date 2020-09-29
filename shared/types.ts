import { Field, ObjectType } from "type-graphql";
import { prop } from "@typegoose/typegoose";

@ObjectType({ description: "The base class for Senate and House committees." })
export class Committee {
  @Field()
  @prop({ required: true })
  title: string;

  @Field()
  @prop({ required: true, unique: true })
  link: string;

  @Field()
  @prop({ required: true })
  date: Date;

  @Field({ nullable: true })
  @prop()
  time?: Date;

  @Field({ nullable: true })
  @prop()
  text?: string;

  @Field({ nullable: true })
  @prop()
  location?: string;
}
