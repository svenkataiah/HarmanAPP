using Microsoft.EntityFrameworkCore;
using QuickLoanAPI.Model.DbEntity;

namespace QuickLoanAPI.Data
{
    public class QuickLoanDbContext : DbContext
    {
        public QuickLoanDbContext(DbContextOptions<QuickLoanDbContext> options) : base(options)
        {

        }
        public DbSet<User> Users { get; set; }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Address> Addresses { get; set; }
        public DbSet<LoanApplication> LoanApplications { get; set; }
        public DbSet<LoanOptions> LoanOptions { get; set; }
        public DbSet<LoanSchedule> LoanSchedules { get; set; }
        public DbSet<PropertyDetail> PropertyDetails { get; set; }
        public DbSet<Document> Documents { get; set; }
        public DbSet<BankOfficer> BankerOfficers { get; set; }
        public DbSet<FormTemplate> FormTemplates { get; set; }
        public DbSet<FormSection> FormSections { get; set; }
        public DbSet<FormField> FormFields { get; set; }
        public DbSet<FormFieldAttribute> FormFieldAttributes { get; set; }
        public DbSet<LibraryField> LibraryFields { get; set; }
        public DbSet<LibraryFieldAttribute> LibraryFieldAttributes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("User");
            modelBuilder.Entity<Account>().ToTable("Account");
            modelBuilder.Entity<Address>().ToTable("Address");
            modelBuilder.Entity<LoanApplication>().ToTable("LoanApplication");
            modelBuilder.Entity<LoanOptions>().ToTable("LoanOptions");
            modelBuilder.Entity<LoanSchedule>().ToTable("LoanSchedule");
            modelBuilder.Entity<PropertyDetail>().ToTable("PropertyDetail");
            modelBuilder.Entity<Document>().ToTable("Document");
            modelBuilder.Entity<BankOfficer>().ToTable("BankOfficer");
            modelBuilder.Entity<FormTemplate>().ToTable("FormTemplates");
            modelBuilder.Entity<FormSection>().ToTable("FormSections");
            modelBuilder.Entity<FormField>().ToTable("FormFields");
            modelBuilder.Entity<FormFieldAttribute>().ToTable("FormFieldAttributes");
            modelBuilder.Entity<LibraryField>().ToTable("LibraryFields");
            modelBuilder.Entity<LibraryFieldAttribute>().ToTable("LibraryFieldAttributes");
        }
    }
}
