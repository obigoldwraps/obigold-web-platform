# Services Update TODO

## Plan Steps (Approved)

✅ **Step 0**: Create this TODO_SERVICES.md to track progress.

✅ **Step 1**: Update `src/components/Services.tsx` - Add props (`allServices?: boolean, simpleDesign?: boolean, linkToServices?: boolean`), logic for filtering services (slice(0,3) if !allServices), conditional rendering (current overlay if !simpleDesign, new stacked image+text if simpleDesign), update button href if linkToServices. **COMPLETE**

**Step 2**: Update `src/components/Home.tsx` - Change `<Services />` to `<Services linkToServices={true} />`. **COMPLETE**

**Step 3**: Update `src/components/ServicesPage.tsx` - Change `<Services />` to `<Services allServices={true} simpleDesign={true} />`. **COMPLETE**

✅ **Step 4**: Verify routing in `src/App.tsx` for `/services` - Confirmed route exists. **COMPLETE**

✅ **Step 5**: Files updated. Test with `npm run dev`: Homepage shows 3 services (original overlay cards, Learn More links to /services), Services page shows 5 services (stacked images grid above text blocks).

**Step 6**: attempt_completion.

Current progress: Steps 0-5 complete.

