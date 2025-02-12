﻿// <auto-generated />
using DateMe.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace DateMe.Migrations
{
    [DbContext(typeof(DatingApplicationContext))]
    partial class DatingApplicationContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "8.0.12");

            modelBuilder.Entity("DateMe.Models.Application", b =>
                {
                    b.Property<int>("applicationId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("age")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("creeperStalkerStatus")
                        .HasColumnType("INTEGER");

                    b.Property<string>("firstname")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("lastname")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("major")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("occupation")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("phone")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("applicationId");

                    b.ToTable("Applications");
                });
#pragma warning restore 612, 618
        }
    }
}
